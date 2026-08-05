import React from 'react';

export interface LanEarthEuropeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthEuropeThin(props: LanEarthEuropeThinProps): React.ReactElement;
export default LanEarthEuropeThin;
