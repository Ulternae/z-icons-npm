import React from 'react';

export interface LanFileCadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCadRegular: React.FC<LanFileCadRegularProps>;
export default LanFileCadRegular;
