import React from 'react';

export interface LanCloudFogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudFog(props: LanCloudFogProps): React.ReactElement;
export default LanCloudFog;
