import React from 'react';

export interface LanPageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPageThin(props: LanPageThinProps): React.ReactElement;
export default LanPageThin;
