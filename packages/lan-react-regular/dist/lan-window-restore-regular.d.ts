import React from 'react';

export interface LanWindowRestoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowRestoreRegular(props: LanWindowRestoreRegularProps): React.ReactElement;
export default LanWindowRestoreRegular;
