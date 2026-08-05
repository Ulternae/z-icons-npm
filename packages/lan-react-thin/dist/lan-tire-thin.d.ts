import React from 'react';

export interface LanTireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireThin(props: LanTireThinProps): React.ReactElement;
export default LanTireThin;
