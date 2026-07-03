import React from 'react';

export interface BruKaggleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKaggle(props: BruKaggleProps): React.ReactElement;
export default BruKaggle;
