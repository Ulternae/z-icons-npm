import React from 'react';

export interface LanRectangleBetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleBetaThin(props: LanRectangleBetaThinProps): React.ReactElement;
export default LanRectangleBetaThin;
