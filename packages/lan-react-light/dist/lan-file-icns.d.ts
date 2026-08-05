import React from 'react';

export interface LanFileIcnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileIcns(props: LanFileIcnsProps): React.ReactElement;
export default LanFileIcns;
