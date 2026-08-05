import React from 'react';

export interface LanBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuoteSolid(props: LanBlockQuoteSolidProps): React.ReactElement;
export default LanBlockQuoteSolid;
