import React from 'react';

export interface BruJsfiddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJsfiddle(props: BruJsfiddleProps): React.ReactElement;
export default BruJsfiddle;
