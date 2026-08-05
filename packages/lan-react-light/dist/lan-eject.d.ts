import React from 'react';

export interface LanEjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEject(props: LanEjectProps): React.ReactElement;
export default LanEject;
