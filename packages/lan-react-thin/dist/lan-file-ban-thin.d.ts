import React from 'react';

export interface LanFileBanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBanThin(props: LanFileBanThinProps): React.ReactElement;
export default LanFileBanThin;
