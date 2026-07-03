import React from 'react';

export interface BruNodeJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNodeJs(props: BruNodeJsProps): React.ReactElement;
export default BruNodeJs;
