import React from 'react';

export interface LanFaceLyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLying(props: LanFaceLyingProps): React.ReactElement;
export default LanFaceLying;
