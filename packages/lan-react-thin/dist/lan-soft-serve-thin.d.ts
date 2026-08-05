import React from 'react';

export interface LanSoftServeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoftServeThin(props: LanSoftServeThinProps): React.ReactElement;
export default LanSoftServeThin;
