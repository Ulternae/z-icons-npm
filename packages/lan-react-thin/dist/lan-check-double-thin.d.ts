import React from 'react';

export interface LanCheckDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckDoubleThin(props: LanCheckDoubleThinProps): React.ReactElement;
export default LanCheckDoubleThin;
