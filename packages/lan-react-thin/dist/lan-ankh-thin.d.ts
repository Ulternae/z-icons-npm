import React from 'react';

export interface LanAnkhThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnkhThin(props: LanAnkhThinProps): React.ReactElement;
export default LanAnkhThin;
