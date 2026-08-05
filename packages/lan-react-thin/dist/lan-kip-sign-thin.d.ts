import React from 'react';

export interface LanKipSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKipSignThin(props: LanKipSignThinProps): React.ReactElement;
export default LanKipSignThin;
