import React from 'react';

export interface BruNodeJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNodeJs: React.FC<BruNodeJsProps>;
export default BruNodeJs;
