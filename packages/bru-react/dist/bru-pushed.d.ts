import React from 'react';

export interface BruPushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPushed(props: BruPushedProps): React.ReactElement;
export default BruPushed;
