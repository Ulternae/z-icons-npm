import React from 'react';

export interface BruHuggingFaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHuggingFace: React.FC<BruHuggingFaceProps>;
export default BruHuggingFace;
