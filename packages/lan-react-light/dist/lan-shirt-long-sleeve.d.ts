import React from 'react';

export interface LanShirtLongSleeveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtLongSleeve(props: LanShirtLongSleeveProps): React.ReactElement;
export default LanShirtLongSleeve;
