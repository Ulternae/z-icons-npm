import React from 'react';

export interface LanPickleballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickleballThin: React.FC<LanPickleballThinProps>;
export default LanPickleballThin;
