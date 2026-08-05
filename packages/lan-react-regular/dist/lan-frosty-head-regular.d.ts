import React from 'react';

export interface LanFrostyHeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrostyHeadRegular(props: LanFrostyHeadRegularProps): React.ReactElement;
export default LanFrostyHeadRegular;
