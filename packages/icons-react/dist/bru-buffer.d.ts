import React from 'react';

export interface BruBufferProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBuffer: React.FC<BruBufferProps>;
export default BruBuffer;
