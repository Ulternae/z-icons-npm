import React from 'react';

export interface LanHorseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseThin(props: LanHorseThinProps): React.ReactElement;
export default LanHorseThin;
