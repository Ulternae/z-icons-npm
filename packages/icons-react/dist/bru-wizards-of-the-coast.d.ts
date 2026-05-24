import React from 'react';

export interface BruWizardsOfTheCoastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWizardsOfTheCoast: React.FC<BruWizardsOfTheCoastProps>;
export default BruWizardsOfTheCoast;
