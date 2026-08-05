import React from 'react';

export interface LanBoxArchiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArchiveRegular(props: LanBoxArchiveRegularProps): React.ReactElement;
export default LanBoxArchiveRegular;
