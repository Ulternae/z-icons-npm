import React from 'react';

export interface MinaPresentationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPresentation: React.FC<MinaPresentationProps>;
export default MinaPresentation;
