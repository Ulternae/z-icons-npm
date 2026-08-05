import React from 'react';

export interface LanStoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoolThin(props: LanStoolThinProps): React.ReactElement;
export default LanStoolThin;
