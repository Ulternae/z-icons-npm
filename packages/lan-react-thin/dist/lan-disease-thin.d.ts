import React from 'react';

export interface LanDiseaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiseaseThin(props: LanDiseaseThinProps): React.ReactElement;
export default LanDiseaseThin;
