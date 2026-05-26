import React from 'react';

export interface LanPickleballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickleball: React.FC<LanPickleballProps>;
export default LanPickleball;
