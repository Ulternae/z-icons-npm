import React from 'react';

export interface LanPostageStampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPostageStampThin(props: LanPostageStampThinProps): React.ReactElement;
export default LanPostageStampThin;
