import React from 'react';

export interface LanSubtitlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubtitlesSolid(props: LanSubtitlesSolidProps): React.ReactElement;
export default LanSubtitlesSolid;
