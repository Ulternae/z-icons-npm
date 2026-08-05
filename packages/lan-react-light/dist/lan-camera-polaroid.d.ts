import React from 'react';

export interface LanCameraPolaroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraPolaroid(props: LanCameraPolaroidProps): React.ReactElement;
export default LanCameraPolaroid;
