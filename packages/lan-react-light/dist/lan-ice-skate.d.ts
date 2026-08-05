import React from 'react';

export interface LanIceSkateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceSkate(props: LanIceSkateProps): React.ReactElement;
export default LanIceSkate;
