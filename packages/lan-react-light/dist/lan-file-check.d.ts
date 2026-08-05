import React from 'react';

export interface LanFileCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCheck(props: LanFileCheckProps): React.ReactElement;
export default LanFileCheck;
