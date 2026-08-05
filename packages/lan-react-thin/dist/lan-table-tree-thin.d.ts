import React from 'react';

export interface LanTableTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableTreeThin(props: LanTableTreeThinProps): React.ReactElement;
export default LanTableTreeThin;
