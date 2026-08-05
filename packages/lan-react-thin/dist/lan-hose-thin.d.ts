import React from 'react';

export interface LanHoseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseThin(props: LanHoseThinProps): React.ReactElement;
export default LanHoseThin;
