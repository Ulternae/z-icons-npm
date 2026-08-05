import React from 'react';

export interface LanFileLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileLockRegular(props: LanFileLockRegularProps): React.ReactElement;
export default LanFileLockRegular;
