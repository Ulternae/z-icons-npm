import React from 'react';

export interface LanHorseshoeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseshoeThin(props: LanHorseshoeThinProps): React.ReactElement;
export default LanHorseshoeThin;
