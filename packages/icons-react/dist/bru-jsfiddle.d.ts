import React from 'react';

export interface BruJsfiddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJsfiddle: React.FC<BruJsfiddleProps>;
export default BruJsfiddle;
