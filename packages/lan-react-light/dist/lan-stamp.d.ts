import React from 'react';

export interface LanStampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStamp(props: LanStampProps): React.ReactElement;
export default LanStamp;
