import React from 'react';

export interface LanDoveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoveThin(props: LanDoveThinProps): React.ReactElement;
export default LanDoveThin;
