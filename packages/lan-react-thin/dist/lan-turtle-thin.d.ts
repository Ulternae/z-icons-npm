import React from 'react';

export interface LanTurtleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurtleThin(props: LanTurtleThinProps): React.ReactElement;
export default LanTurtleThin;
