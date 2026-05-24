import React from 'react';

export interface BruUltralyticsYoloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUltralyticsYolo: React.FC<BruUltralyticsYoloProps>;
export default BruUltralyticsYolo;
