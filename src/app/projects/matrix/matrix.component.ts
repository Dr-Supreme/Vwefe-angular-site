import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrix',
  standalone: false,
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.scss'
})
export class MatrixComponent {

  @ViewChild('matrixCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Or Katakana characters
  private fontSize: number = 16;
  private columns: number[] = [];

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.initializeMatrix();
    this.drawMatrix();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
    cancelAnimationFrame(this.animationFrameId);
  }

  private resizeCanvas(): void {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.initializeMatrix(); // Re-initialize columns on resize
  }

  private initializeMatrix(): void {
    const numColumns = Math.floor(this.canvas.nativeElement.width / this.fontSize);
    this.columns = Array(numColumns).fill(0); // Initialize all columns at y=0
  }

  private drawMatrix(): void {
    // Semi-transparent black rectangle to create the "fade" effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    this.ctx.fillStyle = '#0F0'; // Green color for characters
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.columns.length; i++) {
      const char = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      this.ctx.fillText(char, i * this.fontSize, this.columns[i] * this.fontSize);

      // Reset column if it goes off-screen or randomly
      if (this.columns[i] * this.fontSize > this.canvas.nativeElement.height && Math.random() > 0.975) {
        this.columns[i] = 0;
      }
      this.columns[i]++; // Move character down
    }

    this.animationFrameId = requestAnimationFrame(() => this.drawMatrix());
  }
}
