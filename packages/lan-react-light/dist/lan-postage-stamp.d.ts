import React from 'react';

export interface LanPostageStampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPostageStamp(props: LanPostageStampProps): React.ReactElement;
export default LanPostageStamp;
