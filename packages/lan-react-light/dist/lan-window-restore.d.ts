import React from 'react';

export interface LanWindowRestoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowRestore(props: LanWindowRestoreProps): React.ReactElement;
export default LanWindowRestore;
