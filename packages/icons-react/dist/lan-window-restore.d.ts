import React from 'react';

export interface LanWindowRestoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowRestore: React.FC<LanWindowRestoreProps>;
export default LanWindowRestore;
