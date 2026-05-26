import React from 'react';

export interface LanFrostyHeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrostyHeadRegular: React.FC<LanFrostyHeadRegularProps>;
export default LanFrostyHeadRegular;
