import React from 'react';

export interface LanStoreLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreLock: React.FC<LanStoreLockProps>;
export default LanStoreLock;
