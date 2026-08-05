import React from 'react';

export interface LanSpiderWebProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderWeb(props: LanSpiderWebProps): React.ReactElement;
export default LanSpiderWeb;
