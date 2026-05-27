import React from 'react';

export interface CoreStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStrikethrough: React.FC<CoreStrikethroughProps>;
export default CoreStrikethrough;
